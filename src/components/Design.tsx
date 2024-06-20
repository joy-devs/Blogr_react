import editor from "../assets/images/illustration-editor-desktop.svg";

const Design = () => {
  return (
    <>
      <h2 className="design-head">Designed for the Future</h2>
      <div className="design">
        <div className="content">
          <div className="mini_header">
            <h4 className="first-head">Introducing an extensible editor</h4>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div><br />
          <div className="mini_header">
            <h4 className="heading">Robust Content management</h4>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div>
          <img src={editor} alt="Editor illustration" className="id-illustration" />
        </div>
      </div>
    </>
  );
};

export default Design;
