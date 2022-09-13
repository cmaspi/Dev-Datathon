"""
Expected Arguments
1. Name of html file (along with extension .html)
2. Roll Number of Student for Verification
"""

import sys
from bs4 import BeautifulSoup

# filename and student roll number are expected input
# roll number is used to verify if the file uploaded by
# the user is correct or not
filename = sys.argv[1]
StudentRollNumber = sys.argv[2]

with open(filename) as fp:
    soup = BeautifulSoup(fp, 'html.parser')

StudentInfo = soup.find('div', {'class': 'studentInfoDiv inlineBlock'})
RollSpan = StudentInfo.find('div', {'class': 'flexDiv'})
ActualRoll = BeautifulSoup.select(RollSpan, 'span')[0].text

assert ActualRoll == StudentRollNumber, "Identity theft is not a Joke!"

Courses = soup.find_all('ul', {'class': 'subCnt'})
Duration = None
f = open('sample.txt', 'w')  # to be deleted
for sem in Courses:
    for course in sem:
        check = course.find('div', {'class': 'col'})
        if check is not None:
            Duration = check.text
        else:
            CourseCode = course.find('span', {'class': 'col1'}).text.strip()
            CourseName = course.find('span', {'class': 'col2'}).text.strip()
            instructor = course.find('span', {'class': 'col7'}).text.strip()
            grade = course.find('span', {'class': 'col8'}).text.strip()
            # temporary
            f.write(f'Course Code: {CourseCode}, Course Name: {CourseName}, ' +
                    f'instructor: {instructor}, grade: {grade}\n')

f.close()
