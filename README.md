
# mongoslug

Save unique slug in mongodb



## Usage/Examples

```javascript
  var slug = await mongoslug({ title: projecttitle, modelname: Project });

```

```javascript
const Project = require("../model/projects");
const { mongoslug } = require("mongoslug");

exports.start = async (req, res) => {
  var { projectname, userid } = req.params;
  /* getting name and bio from user */
  var slug = await mongoslug({ title: projectname, modelname: Project });

  if (slug) {
    let newProject = new Project({
      projectname: projectname,
      postedBy: userid,
      slug: slug,
    });
    newProject.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      } else {
        res.json(data);
        console.log(data);
      }
    });
  }
};

```

