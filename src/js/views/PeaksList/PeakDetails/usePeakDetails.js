import { useState } from 'react';

const usePeakDetails = ({ id }) => {
  const [peakDetails, setPeakDetails] = useState(null);

  const getPeakDetails = () => {
    // TODO - get data from backend

    // fetch("http://localhost:8080/api/peaks/".concat(id))
    // .then(response => {
    //     console.log(response);
    //     if (!response.ok){
    //         throw Error("Error fetching peaks");
    //     }
    //     return response.json();
    // })
    // .then((data) => {
    //     setPeakDetails(data);
    // })

    // example data from backend
    const data =
      '{"_embedded": {"peaks": [{"name": "Rysy","height": 2499,"region": "małopolskie","about": "Góra położona na granicy polsko-słowackiej, w Tatrach Wysokich (jednej z części Tatr). Ma trzy wierzchołki, z których najwyższy jest środkowy (2501 metrów nad poziomem morza), znajdujący się w całości na terytorium Słowacji. Wierzchołek północno-zachodni, przez który biegnie granica, stanowi najwyżej położony punkt Polski i należy do Korony Europy.","mountainRange": "Tatry", "photo": "https://images.unsplash.com/photo-1562878716-48b7542721e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80","_links": {"self": {"href": "http://localhost:8080/api/peaks/2"},"peak": {"href": "http://localhost:8080/api/peaks/2"},"peakCompletions": {"href": "http://localhost:8080/api/peaks/2/peakCompletions"}}},{"name": "Babia Góra","height": 1725,"region": "małopolskie","about": "Masyw górski w Paśmie Babiogórskim należącym do Beskidu Żywieckiego w Beskidach Zachodnich. Jest najwyższym szczytem Beskidów Zachodnich i poza Tatrami najwyższym szczytem w Polsce, drugim co do wybitności (po Śnieżce). ","mountainRange": "Beskid Żywiecki","photo": "https://images.unsplash.com/photo-1614773305142-260aa1658982?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1782&q=80","_links": {"self": {"href": "http://localhost:8080/api/peaks/3" },"peak": {"href": "http://localhost:8080/api/peaks/3"},"peakCompletions": {"href": "http://localhost:8080/api/peaks/3/peakCompletions" }}},{"name": "Śnieżka","height": 1603,"region": "dolnośląskie","about": " Najwyższy szczyt Karkonoszy oraz Sudetów, jak również Czech, województwa dolnośląskiego, a także całego Śląska. Najwybitniejszy szczyt Polski i Czech.","mountainRange": "Karkonosze", "photo": "https://images.unsplash.com/photo-1615124977398-08f4b1f678fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80","_links": {"self": {"href": "http://localhost:8080/api/peaks/4"},"peak": {"href": "http://localhost:8080/api/peaks/4"},"peakCompletions": {"href": "http://localhost:8080/api/peaks/4/peakCompletions" }}}]},"_links": {"self": {"href": "http://localhost:8080/api/peaks"},"profile": {"href": "http://localhost:8080/api/profile/peaks" }}}';
    const peaks = JSON.parse(data)._embedded.peaks;

    for (let peak of peaks) {
      if ('http://localhost:8080/api/peaks/'.concat(id) === peak._links.self.href) {
        setPeakDetails(peak);
      }
    }
  };

  return {
    peakDetails,
    getPeakDetails,
  };
};

export default usePeakDetails;
