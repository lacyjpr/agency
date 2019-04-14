########################################################
# generate-projects.sh
# Uses a list of projects and generates a folder for
# each, along with jsx, tests, scss and exports
# necessary for a barebones functional component
# Credit: @P1xt https://github.com/P1xt/speedrun-may2018-react/blob/master/client/utilities/generate-projects.sh
########################################################

########################################
# createProject
# Params: folder, project
#
# Initializes a project folder
# with jsx, exports, tests, and css
########################################
createProject () {
  declare folder=$1
  declare project=$2
  
  mkdir ${folder}/${project}

# Initialize the CSS for the project
cat << EOT >> ${folder}/${project}/${project}.scss
.${project} {
  text-align: center;
}
EOT

# Initialize the JSX for the project
cat << EOT >> ${folder}/${project}/${project}.js
import React from 'react';
import './${project}.scss';
const ${project} = () => (
    <div className='${project}'>
      <h1>${project}</h1>
    </div>
);
export default ${project};
EOT

# Initialize the exports for the project
cat << EOT >> ${folder}/${project}/index.js
import ${project} from './${project}.js';
export default ${project};
EOT

# Initialize the tests for the project
cat << EOT >> ${folder}/${project}/${project}.test.js
import React from 'react';
import { shallow } from 'enzyme';
import ${project} from './${project}';
describe('<${project} />', () => {
  it('renders without crashing', () => {
    shallow(<${project} />);
  });
});
EOT
}

# Frontend project list
declare -a Components=(
  'Header'
  'Hero'
  'Services'
  'Portfolio'
  'About'
  'Team'
  'Users'
  'Contact'
  'Footer'
);
mkdir ./Components
for project in ${Components[@]}
do
  createProject 'Components' ${project}
done


