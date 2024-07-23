import { ExpandableContent } from "@/components/expandable-content";
import Link from "next/link";

export default function WithExpandableContent() {
  return (
    <main>
      <h1 style={{ margin: "32px" }}>Expandable Content</h1>
      <p style={{ margin: "32px" }}>
        This page contains articles that can be expanded.
      </p>
      <ExpandableContent>
        <article>
          <h2>Heading 1</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Augue etiam
            nascetur commodo diam eros ornare habitant nec. Curabitur ligula
            dignissim erat bibendum inceptos semper. Egestas orci lectus luctus
            cursus id nec praesent tellus. Morbi consequat augue finibus
            ultrices et commodo molestie neque augue. Imperdiet egestas neque id
            tristique nec accumsan rhoncus tellus in. Vitae dignissim dictumst
            magna interdum dapibus. Tincidunt eu fermentum at aliquet mi.
          </p>
          <p>
            Varius lacus duis suscipit sodales maximus cubilia augue per
            inceptos. Conubia etiam donec donec quam rhoncus id. Neque varius
            tortor vestibulum aliquet cursus quisque. Ad risus senectus tempus
            ante et platea. Suscipit potenti fringilla ridiculus platea nibh,
            nec rutrum finibus mi. Iaculis fusce rhoncus hendrerit tellus duis
            vel fermentum porttitor mi. Vivamus conubia nisi per quisque at
            ridiculus. Sociosqu curae fringilla cras adipiscing amet vehicula.
            Ante primis justo suscipit elit cras. Rutrum fringilla eleifend
            finibus laoreet integer inceptos vestibulum nunc ac.
          </p>
          <p>
            Vulputate sociosqu augue enim ullamcorper; gravida natoque dapibus
            quis mus. Varius parturient nascetur donec pulvinar; sollicitudin
            nec. Amet ex dapibus integer aliquet sapien nulla nisi feugiat
            platea. Ullamcorper enim erat pharetra nisl fringilla egestas. Nec
            dolor sit posuere potenti elementum pellentesque eleifend. Facilisis
            ut tincidunt consequat dui, venenatis dui orci.
          </p>
          <p>
            Nulla augue sodales justo per sed sapien viverra pellentesque
            accumsan. Elementum ipsum eros hendrerit fringilla per porta.
            Gravida nulla integer porttitor maecenas condimentum pellentesque
            luctus dapibus. Scelerisque malesuada egestas adipiscing ut facilisi
            sit nulla class. Nam sagittis duis nascetur vehicula platea interdum
            mus nisl laoreet. Lobortis at tristique feugiat ipsum at laoreet
            lacus. Class pellentesque aenean mattis lacus pretium, volutpat
            quisque senectus.
          </p>
          <p>
            Aptent habitant nam finibus mauris ultricies nec vivamus maximus.
            Erat posuere dapibus suspendisse lacinia proin montes dolor bibendum
            phasellus. Maecenas rutrum tempor faucibus est mus. Tristique augue
            erat class nostra ullamcorper odio taciti. Nisi ut egestas mus porta
            bibendum nascetur. Cursus convallis eget vel diam morbi etiam.
            Mollis class amet praesent tortor egestas. Enim lacus primis sed;
            commodo curabitur nisl erat. Per varius pharetra per tristique
            parturient nostra.
          </p>
        </article>
      </ExpandableContent>
      <ExpandableContent>
        <article>
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Augue etiam
            nascetur commodo diam eros ornare habitant nec. Curabitur ligula
            dignissim erat bibendum inceptos semper. Egestas orci lectus luctus
            cursus id nec praesent tellus. Morbi consequat augue finibus
            ultrices et commodo molestie neque augue. Imperdiet egestas neque id
            tristique nec accumsan rhoncus tellus in. Vitae dignissim dictumst
            magna interdum dapibus. Tincidunt eu fermentum at aliquet mi.
          </p>
          <p>
            Varius lacus duis suscipit sodales maximus cubilia augue per
            inceptos. Conubia etiam donec donec quam rhoncus id. Neque varius
            tortor vestibulum aliquet cursus quisque. Ad risus senectus tempus
            ante et platea. Suscipit potenti fringilla ridiculus platea nibh,
            nec rutrum finibus mi. Iaculis fusce rhoncus hendrerit tellus duis
            vel fermentum porttitor mi. Vivamus conubia nisi per quisque at
            ridiculus. Sociosqu curae fringilla cras adipiscing amet vehicula.
            Ante primis justo suscipit elit cras. Rutrum fringilla eleifend
            finibus laoreet integer inceptos vestibulum nunc ac.
          </p>
          <p>
            Vulputate sociosqu augue enim ullamcorper; gravida natoque dapibus
            quis mus. Varius parturient nascetur donec pulvinar; sollicitudin
            nec. Amet ex dapibus integer aliquet sapien nulla nisi feugiat
            platea. Ullamcorper enim erat pharetra nisl fringilla egestas. Nec
            dolor sit posuere potenti elementum pellentesque eleifend. Facilisis
            ut tincidunt consequat dui, venenatis dui orci.
          </p>
          <p>
            Nulla augue sodales justo per sed sapien viverra pellentesque
            accumsan. Elementum ipsum eros hendrerit fringilla per porta.
            Gravida nulla integer porttitor maecenas condimentum pellentesque
            luctus dapibus. Scelerisque malesuada egestas adipiscing ut facilisi
            sit nulla class. Nam sagittis duis nascetur vehicula platea interdum
            mus nisl laoreet. Lobortis at tristique feugiat ipsum at laoreet
            lacus. Class pellentesque aenean mattis lacus pretium, volutpat
            quisque senectus.
          </p>
          <p>
            Aptent habitant nam finibus mauris ultricies nec vivamus maximus.
            Erat posuere dapibus suspendisse lacinia proin montes dolor bibendum
            phasellus. Maecenas rutrum tempor faucibus est mus. Tristique augue
            erat class nostra ullamcorper odio taciti. Nisi ut egestas mus porta
            bibendum nascetur. Cursus convallis eget vel diam morbi etiam.
            Mollis class amet praesent tortor egestas. Enim lacus primis sed;
            commodo curabitur nisl erat. Per varius pharetra per tristique
            parturient nostra.
          </p>
        </article>
      </ExpandableContent>{" "}
      <ExpandableContent>
        <article>
          <h2>Heading 3</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Augue etiam
            nascetur commodo diam eros ornare habitant nec. Curabitur ligula
            dignissim erat bibendum inceptos semper. Egestas orci lectus luctus
            cursus id nec praesent tellus. Morbi consequat augue finibus
            ultrices et commodo molestie neque augue. Imperdiet egestas neque id
            tristique nec accumsan rhoncus tellus in. Vitae dignissim dictumst
            magna interdum dapibus. Tincidunt eu fermentum at aliquet mi.
          </p>
          <p>
            Varius lacus duis suscipit sodales maximus cubilia augue per
            inceptos. Conubia etiam donec donec quam rhoncus id. Neque varius
            tortor vestibulum aliquet cursus quisque. Ad risus senectus tempus
            ante et platea. Suscipit potenti fringilla ridiculus platea nibh,
            nec rutrum finibus mi. Iaculis fusce rhoncus hendrerit tellus duis
            vel fermentum porttitor mi. Vivamus conubia nisi per quisque at
            ridiculus. Sociosqu curae fringilla cras adipiscing amet vehicula.
            Ante primis justo suscipit elit cras. Rutrum fringilla eleifend
            finibus laoreet integer inceptos vestibulum nunc ac.
          </p>
          <p>
            Vulputate sociosqu augue enim ullamcorper; gravida natoque dapibus
            quis mus. Varius parturient nascetur donec pulvinar; sollicitudin
            nec. Amet ex dapibus integer aliquet sapien nulla nisi feugiat
            platea. Ullamcorper enim erat pharetra nisl fringilla egestas. Nec
            dolor sit posuere potenti elementum pellentesque eleifend. Facilisis
            ut tincidunt consequat dui, venenatis dui orci.
          </p>
          <p>
            Nulla augue sodales justo per sed sapien viverra pellentesque
            accumsan. Elementum ipsum eros hendrerit fringilla per porta.
            Gravida nulla integer porttitor maecenas condimentum pellentesque
            luctus dapibus. Scelerisque malesuada egestas adipiscing ut facilisi
            sit nulla class. Nam sagittis duis nascetur vehicula platea interdum
            mus nisl laoreet. Lobortis at tristique feugiat ipsum at laoreet
            lacus. Class pellentesque aenean mattis lacus pretium, volutpat
            quisque senectus.
          </p>
          <p>
            Aptent habitant nam finibus mauris ultricies nec vivamus maximus.
            Erat posuere dapibus suspendisse lacinia proin montes dolor bibendum
            phasellus. Maecenas rutrum tempor faucibus est mus. Tristique augue
            erat class nostra ullamcorper odio taciti. Nisi ut egestas mus porta
            bibendum nascetur. Cursus convallis eget vel diam morbi etiam.
            Mollis class amet praesent tortor egestas. Enim lacus primis sed;
            commodo curabitur nisl erat. Per varius pharetra per tristique
            parturient nostra.
          </p>
        </article>
      </ExpandableContent>
      <Link href="/" style={{ float: "right" }}>
        Back to Home
      </Link>
    </main>
  );
}
