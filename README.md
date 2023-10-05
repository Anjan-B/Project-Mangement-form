<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<h1><center>Project Management Form</center></h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    </li>
    <li><a href="#Description">Description</a></li>
    <li><a href="#Benefits of using JsonPowerDB">Benefits of using JsonPowerDB</a></li>
    <li><a href="#Release History">Release History</a></li>
  </ol>
</details>



## Description

Data Structure: Define the data structure in JSON format. In this example, we have a JSON object called "projects" containing an array of project objects. Each project object has the following properties:
1. project_id (Primary Key): Unique identifier for the project.
2. project_name: Name of the project.
3. assign_to: Person assigned to the project.
4. assessment_date: Date when the project is assessed.
5. deadline: Deadline for the project

CRUD Operations: Use the JPDB API to interact with the database for CRUD operations.
1. Create a new project: Use db.insertData("projects", newProject) to add a new project to the database.
2. Read a project by its ID: Use db.getData("projects", projectIdToRead) to retrieve project information by ID.
3. Update a project's information: Use db.updateData("projects", projectIdToUpdate, updatedProject) to modify project details.
4. Delete a project: Use db.deleteData("projects", projectIdToDelete) to remove a project from the database.

With this setup, you can easily manage project data, including project names, assignments, assessment dates, and deadlines using JSONPowerDB.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Benefits of using JsonPowerDB

JsonPowerDB is a Database Server with Developer friendly REST API services. It's a High Performance, Light Weight, Ajax Enabled, Serverless, Simple to Use, Real-time Database.

Easy and fast to develop database applications without using any server side programming / scripting or without installing any kind of database.

Whether it's a Dynamic Website or a Mobile App or some Data Analytics Portal, the development is real fun and fast. Nothing better than trying it yourself. What all you need is a basic understanding of HTML, CSS, Bootstrap, and Javascript.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Release History

•	Created index.html for required project

•	Created index.js

•	Synced the input elements with local variables

•	Implemented CRUD operations through JsonPowerDB

•	Created database COLLEGE-DB

•	Created relation PROJECT_TABLE

<p align="right">(<a href="#readme-top">back to top</a>)</p>




