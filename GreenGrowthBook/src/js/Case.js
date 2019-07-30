class Case{

    constructor(index,case_, chapter, country, mechanism){
        this.id  = case_["number"].replace(".","-");
        this.title = case_["name"];
        this.country = country;
        this.mechanism = mechanism;
        this.summary = case_['summary'];
        this.loc_view = case_['location_view'];
        this.chapter = chapter;
        this.num_images=case_["num_images"];
        this.index=index;
        this.has_dynamic_fig = case_['dynamic'];
        this.has_static_fig = false;
        this.static_fig_title = "none";
        this.figures = []

    }
}
