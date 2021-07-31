import json
import pandas
import random


# INSTRUCTIONS FOR CREATING MOCK STUDENTS
# BACKGROUND: this python script allows for the creation of realistic mock students,
# potentially to be used in populating a database. 
# The methods of this script use results from a survey given to the UBC student body. 
# By doing so, the script is able to produce students that somewhat resemble the surveyed students.

# IF YOU WISH TO CREATE MOCK STUDENTS...,
# scroll down to line "320" to the function call "manufactureStudents(integer)".
# Uncomment this line by deleting the "#" symbol at the start of the line,
# and replace "integer" with the number of students you wish to create.

# then, if you own a Mac, open a terminal at the directory you are storing this file, 
# and copy and paste the following command into the terminal: python3 CreateStudents.py 
# The terminal should then output a list of student objects.
# You may wish to copy and paste this list into a JSON file.
# NOTE: you must have python downloaded in your system. You may find the latest version
# may be found here: https://www.python.org/downloads/mac-osx/ 

excel_data_df = pandas.read_excel('SurveyResponses.xlsx', sheet_name='Form Responses 1')

academicYear = pandas.DataFrame(data=excel_data_df, columns=["Academic Year"])
coop = pandas.DataFrame(data=excel_data_df, columns=["Co-op"])
gpa = pandas.DataFrame(data=excel_data_df, columns=["GPA"])
genCSSkills = pandas.DataFrame(data=excel_data_df, columns=["General CS Skills"])
workExperience = pandas.DataFrame(data=excel_data_df, columns=["work experience"])

languages = pandas.DataFrame(data=excel_data_df, 
	columns=[
	"Java",
	"Python",
	"C++",
	"C",
	"C#",
	"Javascript",
	"Typescript",
	"HTML",
	"CSS", 
	"R",
	"MATLAB",
	"Mathematica",
	"SQL",
	"Other"
	])

frameworks = pandas.DataFrame(data=excel_data_df, 
	columns=[
	"React",
	"Node",
	"Angular",
	"Bootstrap",
	"MongoDB",
	"Ruby on Rails",
	"Google Cloud",
	"AWS",
	"Docker",
	"Linux",
	"Unix",
	"Other"
	])

workflowTools = pandas.DataFrame(data=excel_data_df, 
	columns= [
	"GitHub",
	"Azure",
	"Jira",
	"Jupyter",
	"Other",
	])

languagesDict = languages.to_dict('index')
frameworksDict = frameworks.to_dict('index')
workflowToolsDict = workflowTools.to_dict('index')
academicYearDict = academicYear.to_dict('index')
coopDict = coop.to_dict('index')
gpaDict = gpa.to_dict('index')
genCSSkillsDict = genCSSkills.to_dict('index')
workExperienceDict = workExperience.to_dict('index')

## Methods from lines 87 through to 275 are used for purposes of synthetically populating fields from realistically weighted pools

cssConcepts = ['Data Structures',
 'Algorithms',
 'Asynchronous programming',
 'Agile Development', 
 'Object-Oriented Programming', 
 'Functional Programming', 
 'web APIs', 
 'RESTify services',
 'Computer Networks']

def cssConceptsPopulator():
	studentCSSConcepts = []
	for concept in cssConcepts:
		if (bool(random.getrandbits(1))):
			studentCSSConcepts.append(concept)
	return studentCSSConcepts
	
def reformatDictionary(dictionary):
	for key in dictionary: 
		dictionary[key] = reformatElement(dictionary[key])
	return(dictionary)

def reformatElement(content):
	if (content == '≥ 4 months'):
		return 4
	elif (content == '≥ 8 months'):
		return 8
	elif (content == '≥ 12 months'):
		return 12
	elif (content == '≥ 2 years'):
		return 24
	elif (content == 'None'):
		return 0
	elif (content == 'Below 60%'):
		return random.randint(50, 59)
	elif (content == '60-69%'):
		return random.randint(60, 69)
	elif (content == '70-79%'):
		return random.randint(70, 79)
	elif (content == '80-89%'):
		return random.randint(80, 89)
	elif (content == '90%+'):
		return random.randint(90, 100)
	elif (content == '4th Year+'):
		return 4
	elif (content == '3rd Year'):
		return 3
	elif (content == '2nd Year'):
		return 2
	elif (content == '1st Year'):
		return 1
	elif (content == 'Yes'):
		return True
	elif (content == 'No'):
		return False

def gpaRandomizer(figure):
	if (figure == 50):
		return random.randint(50, 59)
	elif (figure == 60):
		return random.randint(60, 69)
	elif (figure == 70):
		return random.randint(70, 79)
	elif (figure == 80):
		return random.randint(80, 89)
	elif (figure == 90):
		return random.randint(90, 100)

seeking = [True, True, True, True, True, True, True, False, False, False]
coop = [True, True, True, True, True, True, False, False, False, False]
workExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 12, 12, 24]
aYear = [1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]
sGPA = [50, 60, 60, 60, 70, 70, 70, 70, 70, 70, 80, 80, 80, 80, 80, 80, 80, 90, 90, 90]
techExperience = [0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24]
javaExperience = [0, 4, 4, 4, 4, 4, 8, 8, 8, 12, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24]
pythonExperience = [0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 8, 8, 8, 12, 12, 12, 12, 24, 24, 24]
cppExperience = [0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 12, 12, 12, 24]
cExperience = [0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 12, 12, 12, 24, 24]
cppppExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 12, 24]
javascriptExperience = [0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24]
typescriptExperience = [0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 8, 8, 12, 12, 12, 12, 12, 24]
htmlExperience = [0, 4, 4, 4, 4, 4, 8, 8, 8, 12, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24]
cssExperience = [0, 4, 4, 4, 4, 4, 4, 4, 8, 12, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24]
rExperience = [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 12, 24]
matlabExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 8, 12, 24]
mathematicaExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 24]
sqlExperience = [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 12, 12, 12, 24]
otherExperience = [0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 8, 12, 12, 12, 12, 24, 24, 24, 24]
reactExperience = [0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 8, 8, 8, 12, 12, 12, 12, 24, 24, 24]
nodeExperience = [0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 8, 8, 8, 12, 12, 12, 12, 12, 24, 24]
angularExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 24]
bootstrapExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 8, 8, 12, 12, 24]
mongodbExperience = [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 8, 8, 8, 12, 12, 24, 24]
rubyonrailsExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12]
googlecloudExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 8, 8, 8, 12, 12, 24]
awsExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 8, 8, 8, 12, 12, 24, 24]
dockerExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 8, 8, 8, 12, 12, 24]
linuxExperience = [0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 8, 12, 12, 12, 12, 24, 24, 24, 24]
unixExperience = [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 8, 8, 8, 8, 12, 12, 12, 24, 24]
githubExperience = [0, 4, 8, 8, 12, 12, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24, 24, 24, 24, 24]
azureExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 8, 8, 12, 12, 24]
jiraExperience = [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 8, 8, 8, 12, 12, 12, 24, 24, 24]
jupyterExperience = [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 8, 8, 8, 8, 12, 12, 12, 24, 24]
asanaExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 12 ,12, 24]
confluenceExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 12 ,12, 24]
notionExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 12 ,12, 24]
kubernetesExperience = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 12 ,12, 24]
materialuiExperience = [0, 0, 0, 0, 4, 4, 4, 4, 8, 8, 8, 8, 12, 12, 12, 12, 24, 24, 24, 24]


location = [
'Canada', 'Canada', 'Canada', 'Canada', 'Canada',
'Canada', 'Canada', 'Canada', 'Canada', 'Canada', 
'Canada', 'Canada', 'Canada', 'Canada', 'Canada', 
'Canada', 'Canada', 'France', 'China', 'Japan', 
'Singapore', 'Russia', 'India', 'Turkey', 'Germany']

degree = [
"BSc", "BSc", "BSc", "BSc", "BSc",
"BSc", "BSc", "BSc", "BSc", "BSc",
"BSc", "BSc", "BSc", "BSc", "BSc",
"MSc", "MSc", "MSc", "MSc", "PhD"]

degreeLocation = [
'University of British Columbia', 'University of British Columbia', 'University of British Columbia',
'University of British Columbia', 'University of British Columbia', 'University of British Columbia',
'University of British Columbia', 'University of British Columbia', 'University of British Columbia',
'University of British Columbia', 'University of British Columbia', 'University of British Columbia',
'University of British Columbia', 'University of British Columbia', 'University of British Columbia',
'University of Waterloo', 'University of Alberta', 'University of Toronto', 'McGill University', 'University of Victoria']

citizenship = ['Citizen', 'Citizen', 'Citizen', 'Citizen', 'Citizen',
'Citizen', 'Citizen', 'International', 'International', 'Permanent Residency']

# Use this method to create student objects from the survey results (62 objects in total)
def createStudents(): 
	i = 0
	students = []
	print('starting to assemble students')
	for entry in frameworksDict:
		student = {
		'gpaValue': reformatDictionary(gpaDict[i])['GPA'],
		'year': reformatDictionary(academicYearDict[i])['Academic Year'],
		'coOp': reformatDictionary(coopDict[i])['Co-op'],
		'seeking': seeking[random.randint(0, 9)],
		'candidate': citizenship[random.randint(0, 9)],
		'experience': reformatDictionary(workExperienceDict[i])['work experience'],
		'languages': reformatDictionary(languagesDict[i]),
		'frameworks': reformatDictionary(frameworksDict[i]),
		'tools': reformatDictionary(workflowToolsDict[i]),
		'concepts': genCSSkillsDict[i]['General CS Skills'].split(", "),
		'location': location[random.randint(0, 24)],
		'academicReq': {degree[random.randint(0, 19)] : degreeLocation[random.randint(0, 19)]}	
		}
		students.append(student)
		i+=1
	print(json.dumps(students))
	print('finished assembling students!!')


# Use this method to synthesize a new, realistic, group of students
def manufactureStudents(numStudents):
	i = 0
	students = []
	print('starting to manufacture students')
	while i < numStudents:
		student = {
		'gpaValue': gpaRandomizer(sGPA[random.randint(0, 19)]),
		'year': aYear[random.randint(0, 19)], 
		'coOp': coop[random.randint(0,9)],
		'seeking': seeking[random.randint(0, 9)],
		'candidate': citizenship[random.randint(0, 9)],
		'experience': workExperience[random.randint(0,19)],
		'languages': {
			'Java': javaExperience[random.randint(0,19)],
			'Python': pythonExperience[random.randint(0,19)],
			'C++': cppExperience[random.randint(0,19)],
			'C': cExperience[random.randint(0,19)],
			'C#': cppppExperience[random.randint(0,19)],
			'JavaScript': javascriptExperience[random.randint(0,19)],
			'TypeScript': typescriptExperience[random.randint(0,19)],
			'HTML': htmlExperience[random.randint(0,19)],
			'CSS': cssExperience[random.randint(0,19)],
			'R': rExperience[random.randint(0,19)],
			'MATLAB': matlabExperience[random.randint(0,19)],
			'Mathematica': mathematicaExperience[random.randint(0,19)],
			'SQL': sqlExperience[random.randint(0,19)],
			'Other': otherExperience[random.randint(0,19)]

		},
		'frameworks': {
			'React': reactExperience[random.randint(0,19)],
			'Node': nodeExperience[random.randint(0,19)],
			'Angular': angularExperience[random.randint(0,19)],
			'Bootstrap': bootstrapExperience[random.randint(0,19)],
			'MongoDB': mongodbExperience[random.randint(0,19)],
			'Ruby on Rails': rubyonrailsExperience[random.randint(0,19)],
			'Google Cloud': googlecloudExperience[random.randint(0,19)],
			'AWS': awsExperience[random.randint(0,19)],
			'Docker': dockerExperience[random.randint(0,19)],
			'Linux': linuxExperience[random.randint(0,19)],
			'Unix': unixExperience[random.randint(0,19)],
			'MaterialUI': materialuiExperience[random.randint(0,19)],
			'Other': otherExperience[random.randint(0,19)]

		},
		'tools': {
			'GitHub': githubExperience[random.randint(0,19)],
			'Azure': azureExperience[random.randint(0,19)],
			'Jira': jiraExperience[random.randint(0,19)],
			'Jupyter': jupyterExperience[random.randint(0,19)],
			'Asana': asanaExperience[random.randint(0,19)],
			'Confluence': confluenceExperience[random.randint(0,19)],
			'Notion': notionExperience[random.randint(0,19)],
			'Kubernetes': kubernetesExperience[random.randint(0,19)],
			'Other': otherExperience[random.randint(0,19)]

		},
		'concepts': cssConceptsPopulator(),
		'location': location[random.randint(0, 24)],
		'academicReq': {degree[random.randint(0, 19)] : degreeLocation[random.randint(0, 19)]}	

		}
		student['languages']['CSS'] = min(student['languages']['CSS'], student['languages']['HTML'])
		student['frameworks']['React'] = min(student['frameworks']['React'], student['languages']['JavaScript'])
		student['frameworks']['Node'] = min(student['frameworks']['Node'], student['languages']['JavaScript'])
		student['frameworks']['Angular'] = min(student['frameworks']['Angular'], student['languages']['JavaScript'])
		student['frameworks']['MaterialUI'] = min(student['frameworks']['MaterialUI'], student['frameworks']['React'])
		students.append(student)
		i+=1
	print(json.dumps(students))
	print('completed manufacturing students')


# manufactureStudents(integer)


