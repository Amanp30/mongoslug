const slugify = require("slugify");

exports.mongoslug = async ({ title, modelname }) => {
  // Initialize the slug with the projectname
  let slug = slugify(title).toLowerCase();

  // Generate a 4-character unique string to append to the slug
  const uniqueString = Math.random().toString(36).substring(2, 6);

  // Append the unique string to the slug
  slug = `${slug}-${uniqueString}`;

  // Check if the generated slug already exists in the database
  let project = await modelname.findOne({ slug: slug });

  // If the slug already exists, append a number to the end of the slug until it becomes unique
  let i = 1;
  while (project) {
    slug = `${slug}-${i}`;
    project = await modelname.findOne({ slug: slug });
    i++;
  }

  return slug;
};
