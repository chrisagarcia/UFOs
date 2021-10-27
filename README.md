# UFO Sigthings Data Webpage

SITE: https://chrisagarcia.github.io/UFOs/

I built a webpage in html with css and bootstrap styling and javascript functionality to display a dataset of UFO sightings with multiple searchable parameters and a nicely formatted table. The purpose of this site is to allow journalist, Dana to present her findings and allow her audience to analyze the data themselves with the js-built tools.

---

## Results

The parameter search functionality was built in javascript with the d3 js module. It takes input from input tags located to the right of the table.

How it Works
- first the table is loaded from the data provided by Dana
- an event listener is called that listens for a change in the input boxes and calls updateFilters()
    - the changes are added to a dictionary called filters where key=id and value=input-value
        - the filterTable() funcion is called by updateFilters()
            - for each filter in filters dictionary, the table is filtered with the .filter() method if it exists in the filters dictionary
            - the buildTable() function is called with the filtered table as its argument

---

## Summary

This webpage effectively provides the user with tools to visually analyze the dataset. It could be made better by providing some json download to provide easy access for the user to do more, but, I think for the kind of data presented it might be overkill. Another thing that might really help the user is converting the tex-input boxes to drop down menus in some cases. The date filter should really split into seperate filters for year, month and day to make the filtering more effective. There are only very specific circumstances that would make singling out one day useful.