---
layout: default
title: Download
---
<main>

    <div class="image-section">
            <img src="{{ site.baseurl }}/assets/images/bg_img/bg4.jpg" alt="bg_image">
        </div>
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
    <h3 class="subsection-title">Data Format:</h3>
    <p class="annotation-description">The dataset annotations follow a standard JSON format:</p>
    <pre class="json-code">
{
    "info": {
        "year": int,
        "version": str,
        "description": str,
        "contributor": str,
        "url": str,
        "date_created": datetime
    },
    "images": [
        {
            "id": int,
            "width": int,
            "height": int,
            "file_name": str,
            "license": int,
            "flickr_url": str,
            "coco_url": str,
            "date_captured": datetime
        }
    ],
     "licenses": [
        {
            "id": int,
            "name": str,
            "url": str
        }
    ],
    "annotations": [
        {
            "id": int,
            "image_id": int,
            "category_id": int,
            "segmentation": RLE,
            "area": float,
            "bbox": [x, y, width, height],
            "iscrowd": 0 or 1,
            "iou_with_orig": float
        }
    ],
   
    "categories": [
        {
            "id": int,
            "name": str,
            "supercategory": str
        }
    ]
}
    </pre>
</div>

    </div>
</main>
