---
layout: default
title: Download
---
<main>
    <div class="download-section">
        <h2 class="section-title">Download COCO-ReM</h2>
        <div class="download-box">
            <a href="/path/to/dataset/download" class="download-link">Download Test set</a>
        </div>
        <p class="section-description">Explore and download the latest version of the COCO-ReM dataset for your research.</p>

        <div class="dataset-overview">
            <h3 class="subsection-title">Dataset Overview:</h3>
            <ul class="overview-list">
                <li>Total Images: 5,000</li>
                <li>80 object categories</li>
                <li>Average Image Resolution: 640×480</li>
                <li>Smooth Refined Boundaries</li>
            </ul>
        </div>

        <!-- <div class="dataset-stats">
            <h3 class="subsection-title">Dataset Stats:</h3>
            <p>Total Images: 5,000+</p>
            <p>80 object categories</p>
            <p>Average Image Resolution: 640×480</p>
        </div> -->

        <div class="annotation-format">
            <h3 class="subsection-title">Annotation Format:</h3>
            <p class="annotation-description">The dataset annotations follow a standard JSON format:</p>
            <pre class="json-code">
{
    "info": {
        description:"COCO 2017 Dataset"
        url:"http://cocodataset.org"
        version:"1.0"
        year:2017
        contributor:"COCO Consortium"
        date_created:"2017/09/01"
    },
    "images": [
        {
            license:4
            file_name:"000000397133.jpg"
            coco_url:"http://images.cocodataset.org/val2017/000000397133.jpg"
            height:427
            width:640
            date_captured:"2013-11-14 17:02:52"
            flickr_url:"http://farm7.staticflickr.com/6116/6255196340_da26cf2c9e_z.jpg"
            id:397133
        },
    ],
    "annotations": [
        {
            [
  {
    "segmentation": {
      "size": [640, 529],
      "counts": [303120, 7, 631, 9, 630, 11, 628, 13, 627, 13, 11, 2, 614, 13, 10, 4, 613, 14, 8, 5, 613, 16, 3, 7, 614, 26, 615, 24, 616, 23, 618, 20, 620, 18, 623, 16, 625, 15, 626, 14, 627, 13, 627, 14, 626, 15, 625, 18, 622, 21, 619, 22, 618, 22, 617, 15, 3, 4, 618, 13, 627, 13, 627, 12, 628, 12, 8, 1, 618, 12, 7, 4, 616, 14, 5, 5, 614, 26, 613, 27, 612, 27, 613, 26, 614, 27, 614, 26, 614, 27, 614, 13, 7, 5, 615, 7, 635, 4, 10477]
          },
    "area": 715,
    "iscrowd": 0,
    "image_id": 289343,
    "bbox": [
      473,
      395,
      40,
      29
    ],
    "category_id": 18,
    "id": 1768,
    "iou_with_orig": 0.876
  }
]
        },
    ],
     "categories": [
      {
        "id": 18,
        "name": "Category Name",
        "supercategory": "Super
}
            </pre>
        </div>
    </div>
</main>
