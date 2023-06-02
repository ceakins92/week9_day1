from flask import render_template, flash, redirect, url_for, g
from flask_login import current_user, login_required
from . import bp
from backend.app import app

from models import Post, User
from forms import PostForm


@bp.route('/post', methods=['GET', 'POST'])
@login_required
def post():
    form = PostForm()
    if form.validate_on_submit():
        p = Post(char_name=form.char_name.data, char_description=form.char_description.data,
                 char_super_powers=form.char_super_powers.data, comics_app_in=form.comics_app_in.data, movies_app_in=form.movies_app_in.data)
        p.user_id = current_user.user_id
        p.commit()
        flash('Published', 'success')
        return redirect(url_for('social.user_page', username=current_user.username))
    return render_template('post.jinja', form=form, user_search_form=g.user_search_form)


@bp.route('/user_page/<username>')
@login_required
def user_page(username):
    user = User.query.filter_by(username=username).first()
    return render_template('user_page.jinja', title=username, user=user, user_search_form=g.user_search_form)


@bp.post('/user-search')
@login_required
def user_search():
    if g.user_search_form.validate_on_submit:
        return redirect(url_for('social.user_page', username=g.user_search_form.user.data))
    return redirect(url_for('main.home'))
