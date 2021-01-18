The live version of this code is available at https://appsilon-frontend-task.vercel.app/

To run this on your local server you must first clone the repo

Then

```
npm install
```
Once the packages are installed you should start the Next.js server with
```
npm run dev
```

Important note- ```recharts``` which is the package used for creating charts take some time to adjust its size if you are testing the responsiveness of the dashboard with dev tools. But the dashboard is reponsive and adjusts itself.

Some info about the techstack

1. I have used Next.js as the React Framework as I work on it quite often
2. Styling is done via Styled Components as I like its ability to modularise code
3. Charts are created using ```recharts``` and maps by ```react-simple-maps```


I would have liked to create a more expansive dashboard where the user would be able to fetch data based on a selection of the month, but I ran out of time due to some other work I had to attend to. I hope the code is to your liking, but if it is not, please do give me feedback on where I can improve more.
