const generateToC = (installation, usage, collab, features, repo, deploy) => {};

const generateInstall = (installation) => {
  if (!installation) {
    return "";
  }

  return `
    ## Installation
    
    ${installation}
    `;
};

const generateUsage = (usage) => {
  if (!usage) {
    return "";
  }

  return `
      ## Usage
      
      ${usage}
      `;
};

const generateCollab = (collab) => {
  if (!collab) {
    return "";
  }

  let list = collab.split(", ");
  list.map((item) => {
    return `
      *${item}
    `;
  });

  return `
        ## Credits
        
        ${list}
        `;
};

const generateFeatures = (features) => {
  if (!features) {
    return "";
  }

  let list = features.split(", ");
  list.map((item) => {
    return `
      *${item}
    `;
  });

  return `
        ## Features
        
        ${list}
        `;
};

const generateRepo = (repo) => {
  if (!repo) {
    return "";
  }

  return `
    ### GitHub Repository

    ${repo}
  `;
};

const generateDeploy = (deploy) => {
  if (!deploy) {
    return "";
  }

  return `
    ### Deployed Project Page

    ${deploy}
  `;
};

module.exports = (projectData) => {
  const {
    name,
    title,
    description,
    installation,
    usage,
    collab,
    features,
    repo,
    deploy,
  } = projectData;

  return `
    # ${title}

    ## Description 
    
    ${description}
    
    
    ## Table of Contents

    ${generateToC(installation, usage, collab, features, repo, deploy)}        
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    
    
    ${generateInstall(installation)}
    
    ${generateUsage(usage)}
          
    ${generateCollab(collab)}
    
    ${generateFeatures(features)}
      
    ---

    ${generateRepo(repo)}
   
    ${generateDeploy(deploy)}

    ---

    `;
};
