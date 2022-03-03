---
templateKey: blog-post
title: "D-Tale: One of the Best Python Libraries You Have Ever Seen"
date: 2022-03-03T08:24:01.665Z
description: Python libraries provide a wide range of functionalities for data
  scientists. They allow data scientists to work with various datasets and
  perform complex operations.
featuredimage: /img/2.jpg
tags:
  - Python
  - Coding
  - Programming
  - Data Science
  - Machine Learning
---
Python libraries provide a wide range of functionalities for data scientists. They allow data scientists to work with various datasets and perform complex operations. Python libraries also make it easier to learn new concepts, which is vital for students who are just starting in the field. However, learning Python can be overwhelming and, in the beginning, some tasks that might be easy for other users might take a while to learn how to do and how to use it. That’s where D-Tale can be helpful.

Even seasoned Python users, some tasks can be repetitive and waste your precious time. For this reason, D-Tale can help you optimize tasks such as exploratory data analysis and data cleaning. Saving time, you can focus on more critical tasks such as refining your code and tuning machine learning models. But what is D-Tale? Here’s the explanation from [PyPI](https://pypi.org/project/dtale/):

> D-Tale is the combination of a Flask back-end and a React front-end to bring you an easy way to view & analyze Pandas data structures. It integrates seamlessly with ipython notebooks & python/ipython terminals. Currently this tool supports such Pandas objects as DataFrame, Series, MultiIndex, DatetimeIndex & RangeIndex.

I like to remind readers that I don’t write sponsored content of any kind. I will express my personal opinion about the library based on my impressions. Now, let’s have some fun!

## Installation

We can install D-Tale is simple. Just type `pip install dtale` in your Terminal. I didn't get any errors installing it. Now, we will need to get a dataset to explore D-Tale. Today, I will be using a COVID dataset (Mathieu, E., Ritchie, H., Ortiz-Ospina, E. et al. [A global database of COVID-19 vaccinations. Nat Hum Behav (2021)](https://doi.org/10.1038/s41562-021-01122-8)). It’s an interesting dataset that is complex enough to test some of the D-Tale features and easy enough to understand what is going on.

Now, let’s get started. First, let’s import Pandas and D-Tale to our Jupyter Notebook. Then, we will need to import the dataset, assign it to a variable, and call the variable using D-Tale.

```

```

![](https://miro.medium.com/freeze/max/60/1*cDg26DpkDs7xvXk6EJLr7Q.gif?q=20)

![](https://miro.medium.com/max/1400/1*cDg26DpkDs7xvXk6EJLr7Q.gif)

GIF by the author

Yay! We just opened D-Tale GUI. Unlike Pandas, we can interact with the dataset and the library without typing code. The other cool thing is that D-Tale shows more information than Pandas right on the first screen.

![](https://miro.medium.com/freeze/max/60/1*xP-SW5eLvbluY1-goyW9Pg.gif?q=20)

![](https://miro.medium.com/max/1400/1*xP-SW5eLvbluY1-goyW9Pg.gif)

GIF by the author

First, we can scroll down to the right to see more data. In Pandas, this is not as easy and intuitive as D-Tale. Then, in the left-hand corner, you can see the number of columns and rows in the left-hand corner without typing any code. Rovering at the top, you will see the navigation menu.

![](https://miro.medium.com/freeze/max/60/1*0DtK5UhITKUZfvGmhMQ4tQ.gif?q=20)

![](https://miro.medium.com/max/1400/1*0DtK5UhITKUZfvGmhMQ4tQ.gif)

GIF by the author

Now that we are familiarized with D-Tale, we will explore its features. Another thing about D-Tale is that we don’t need to use it on Jupyter Notebook. So, let’s use D-Tale in a different tab for demonstration purposes. It’s up to you how you want to use it, though. Use the code below.

```

```

![](https://miro.medium.com/freeze/max/60/1*u99SMmEooDSmBJUK8TmH5Q.gif?q=20)

![](https://miro.medium.com/max/1400/1*u99SMmEooDSmBJUK8TmH5Q.gif)

GIF by the author

# **Data Preparation**

## Change datatype with one click

Changing datatype is not difficult on Pandas, even for beginners, and you shouldn’t have problems changing them for one or two features. However, what if you need to change the datatype of 300+ features? This is not uncommon a professional environment, and typing hundreds of code lines is not the best use of our time for tasks like this. With D-Tale, we can change datatypes within a few clicks.

For example, in this dataset, I noticed that the date column is a string. We don’t want that. Let’s change it to DateTime. Just click on the column name, and right below the column name, click on `Type Conversion`, and select if you want to change `inplace` or create a new column. Select the datatype, change the date format, and click Apply. That’s it!

![](https://miro.medium.com/freeze/max/60/1*OYd-5U97qeqdmiQ8Ra822A.gif?q=20)

![](https://miro.medium.com/max/1400/1*OYd-5U97qeqdmiQ8Ra822A.gif)

GIF by the author

There is a bonus. Before applying the change, you can see the code that will be used. If you are learning Python, that’s a fantastic add-on. There is more. Once the datatype is a DateTime, we can see additional information when clicking on the column name, such as skewness. Cool, right?

![](https://miro.medium.com/max/60/1*sdRUyLl7A8U6GcJud6BZFw.png?q=20)

![](https://miro.medium.com/max/1400/1*sdRUyLl7A8U6GcJud6BZFw.png)

Image by the author

## **Create a new column with a different format**

We can also create a new column with a different format. For demonstration purposes, let’s convert the date column into a string. Just click on the column name you want to convert, then click on `Type Conversion`, click on `New Column`, choose the new column name, and select the datatype. Done!

![](https://miro.medium.com/freeze/max/60/1*CFNVWFrBL_p3sRyuMw8WUA.gif?q=20)

![](https://miro.medium.com/max/1400/1*CFNVWFrBL_p3sRyuMw8WUA.gif)

GIF by the author

## Dropping columns

Dropping columns couldn’t be easier. Select the column you want to delete, click on `Delete`, click on `Yes` in the pop-up window, and the column is gone. And yeah, typing the code to drop columns is just as easy, but not this easy.

![](https://miro.medium.com/freeze/max/60/1*RIK6fSFzw9NWp-kcStFHsQ.gif?q=20)

![](https://miro.medium.com/max/1400/1*RIK6fSFzw9NWp-kcStFHsQ.gif)

GIF by the author

## Change the column’s name

Renaming columns process: click, rename, save. This easy! Just click on the column’s name, click on `Rename`, choose the name, and save it. It’s done. This is particularly handy if you need to change the name of dozens of columns.

![](https://miro.medium.com/freeze/max/60/1*41VpHaCnnknsJv4p--jKPQ.gif?q=20)

![](https://miro.medium.com/max/1400/1*41VpHaCnnknsJv4p--jKPQ.gif)

GIF by the author

# Data Transformation

## Filtering data

Filtering data is extremely easy. Click on the column you want to filter. At the bottom, you will see the filtering options. You can filter any datatype. D-Tale has filtering options such as equals, greater/smaller than, different than, etc. It’s all there!

In the example below, I’m filtering the continents to show only data from North America.

![](https://miro.medium.com/freeze/max/60/1*A6igqsi3RdjztaJsEjY6XA.gif?q=20)

![](https://miro.medium.com/max/1400/1*A6igqsi3RdjztaJsEjY6XA.gif)

GIF by the author

## Merging data

To merge two dataframes, click on the ▶ icon at the top left, and a new tab will open. You can upload datasets straight from the UI. Choose the datasets, how you want to join them, and that’s pretty much it. You can also see the code at the bottom if you’re going to use it in another project.

![](https://miro.medium.com/freeze/max/60/1*bZ5iUQchxeS07J__u-xeiw.gif?q=20)

![](https://miro.medium.com/max/1400/1*bZ5iUQchxeS07J__u-xeiw.gif)

GIF by the author

## Grouping By

To group by, click on `Summarize Data`, select the columns you want to group by, the function (sum, count, mean, median, etc), and it’s done. You can open it in the same tab or a different tab.

![](https://miro.medium.com/freeze/max/60/1*pD-7d2k8RnPAKnVXnlWptA.gif?q=20)

![](https://miro.medium.com/max/1400/1*pD-7d2k8RnPAKnVXnlWptA.gif)

## Describe data

Need a quick summary of a feature? Not a problem. With D-Tale, you can see information such as value counts, missing values, frequency, statistics summarization such as mean, median, percentiles, standard deviation, skewness, word counts, and much more. Depending on the data type, it also shows a plot of the data, such as histogram, time series, bar plot, and so on.

To do so, just click on the column’s name, then click on `Describe (column analysis)`, and you will see a lot of cool information.

![](https://miro.medium.com/freeze/max/60/1*hHbNKYULqEcaS8Uiq2rg9g.gif?q=20)

![](https://miro.medium.com/max/1400/1*hHbNKYULqEcaS8Uiq2rg9g.gif)

GIF by the author

If you want to quickly navigate through all the columns, you can click on the ▶ sign at the top right, click on the summary option, and you will be able to check all the features individually with a click.

\[need another GIF]

![](https://miro.medium.com/freeze/max/60/1*zbzb4nFM_iPwW-Hni8dsuA.gif?q=20)

![](https://miro.medium.com/max/1400/1*zbzb4nFM_iPwW-Hni8dsuA.gif)

# Data Visualization

Data visualization is one of the most time-consuming tasks during data analyses. It can be a nightmare for beginners to make them look good, but fortunately, D-Tale can also help with that. You can create visualizations with a few clicks, and the best part: you can get the code and learn what is going on.

## Bar plot

Let’s start creating a bar plot. To create a bar plot, click on the top right, go to charts, and a GUI will open. There, you can select one type of plot between thirteen options! From there, select the X and Y variables, the type of aggregation, if any, and voilá, you just got a nice looking graph.

In the example below, I’m putting continent in the x-axis and number of total COVID cases by continent in the y-axis.

![](https://miro.medium.com/freeze/max/60/1*_jbLBwkCIHxQImjJHPWjbQ.gif?q=20)

![](https://miro.medium.com/max/1400/1*_jbLBwkCIHxQImjJHPWjbQ.gif)

GIF by the author

If you want to group the data, write the variable you want to group and do. In this example, I’m grouping the countries into continent groups.

![](https://miro.medium.com/freeze/max/60/1*XrsH3QKr7_0kny_2iXGNEQ.gif?q=20)

![](https://miro.medium.com/max/1400/1*XrsH3QKr7_0kny_2iXGNEQ.gif)

GIF by the author

## Plot code

As I mentioned, you can easily get the code to check how the plot was created. It’s a good way of learning or even delivering final products, since the charts are good looking and could be use as the final version.

![](https://miro.medium.com/freeze/max/60/1*QMqhbnF9knK-VovmMXjycw.gif?q=20)

![](https://miro.medium.com/max/1400/1*QMqhbnF9knK-VovmMXjycw.gif)

GIF by the author

## Scatter Plot

Creating a scatter plot is just as easy as a bar plot. Choose the x- and y-axis, group, if you want to, and boom. You got a scatter plot. Below, I’m checking the relationship between the number of new cases and the number of vaccinated people against COVID-19.

![](https://miro.medium.com/freeze/max/60/1*L_y2BUKIbYYLADAO0Ue5Ow.gif?q=20)

![](https://miro.medium.com/max/1400/1*L_y2BUKIbYYLADAO0Ue5Ow.gif)

GIF by the author

## Time Series

D-Tale takes time series to another level. With one click, you can easily create a time series plot with them and go over different time series types, such as Hodrick-Prescott and Bacter-King filters. Pretty cool, huh?

![](https://miro.medium.com/freeze/max/60/1*GpNJJR1hPbEOAYkxylRgjA.gif?q=20)

![](https://miro.medium.com/max/1400/1*GpNJJR1hPbEOAYkxylRgjA.gif)

GIF by the author

## Describe Dataset

We already talked about this topic, but I want to mention some exciting visualizations that you can create with the summarization feature, such as histograms, exploring categories, and creating a QQ plot.

However, the coolest part is that you can interact the chosen columns with other columns and create instantaneous graphs. This is the best way to understand your dataset without spending hours typing code to get results that you could get with one click.

![](https://miro.medium.com/freeze/max/60/1*3tsDszHLLuXkkacuLqPR7A.gif?q=20)

![](https://miro.medium.com/max/1400/1*3tsDszHLLuXkkacuLqPR7A.gif)

GIF by the author

# More D-Tale Feature

On top of the data analysis options, D-Tale also offers some additional settings, such as choosing language and dark mode.

## Change language and dark mode

D-Tale has some more complex tasks that can be confusing for non-English speakers, and if you are native language is Chinese or Portuguese, I got good news: D-Tale supports these two languages in addition to English to translate their UI.

It also supports dark mode for those who like it. I’m not the biggest fan of dark mode because I find it harder to read, but you should like this additional feature if you don’t have this problem.

![](https://miro.medium.com/freeze/max/60/1*RKIumgKv0EQWDTmG6_KCGQ.gif?q=20)

![](https://miro.medium.com/max/1400/1*RKIumgKv0EQWDTmG6_KCGQ.gif)

## Highlight columns

D-Tale allows us to highlight data depending on a few options. For example, you can highlight the data depending on the data type. We can also highlight NaN values and outliers to avoid missing them. You can also highlight data based on arguments, such as greater or smaller than a specific number.

![](https://miro.medium.com/freeze/max/60/1*SzT5qgxXkKALcUmpie9bFQ.gif?q=20)

![](https://miro.medium.com/max/1400/1*SzT5qgxXkKALcUmpie9bFQ.gif)

GIF by the author

## Final Thoughts

Phew. This was a lot. In this blog, we saw how D-Tale could make our life easier, even for those seasoned professionals, by turning tedious tasks into intuitive ones. There are so many cool and more complex features that were left out of this blog, so I recommend you to try it out, explore it, and find more features that will be useful for you.

Do I think D-Tale is for everyone? Not really, but if you are a professional who needs to quickly get insights from a dataset or a student new to the Python world, this is a great library to keep in mind. If you are an advanced Python user, you can give it a try and see what you can get from it that would take a while to get through typing code. If you do, please let me know in the comment section. Happy coding!